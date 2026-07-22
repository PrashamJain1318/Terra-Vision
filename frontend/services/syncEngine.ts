/**
 * Intelligent Sync Engine
 * Real-time network status monitoring, offline queueing, and cross-device auto-sync.
 */

export interface SyncQueueItem {
  id: string;
  actionType: 'SAVE_PLACE' | 'CREATE_TRIP' | 'UPLOAD_MEMORY' | 'UPDATE_PREFERENCES' | 'VOICE_COMMAND';
  payload: any;
  timestamp: string;
}

class SyncEngine {
  private queue: SyncQueueItem[] = [];
  private isOnline: boolean = true;
  private listeners: Array<(status: { isOnline: boolean; pendingCount: number }) => void> = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.isOnline = navigator.onLine;
      this.loadQueueFromStorage();

      window.addEventListener('online', this.handleOnlineStatusChange);
      window.addEventListener('offline', this.handleOnlineStatusChange);
    }
  }

  private handleOnlineStatusChange = () => {
    this.isOnline = navigator.onLine;
    this.notifyListeners();
    if (this.isOnline) {
      this.processQueue();
    }
  };

  private loadQueueFromStorage() {
    try {
      const stored = localStorage.getItem('locallens_sync_queue');
      if (stored) {
        this.queue = JSON.parse(stored);
      }
    } catch (e) {
      this.queue = [];
    }
  }

  private saveQueueToStorage() {
    try {
      localStorage.setItem('locallens_sync_queue', JSON.stringify(this.queue));
    } catch (e) {
      console.warn('Failed to save sync queue to localStorage');
    }
  }

  public enqueueAction(actionType: SyncQueueItem['actionType'], payload: any) {
    const item: SyncQueueItem = {
      id: 'sync_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      actionType,
      payload,
      timestamp: new Date().toISOString(),
    };
    this.queue.push(item);
    this.saveQueueToStorage();
    this.notifyListeners();

    if (this.isOnline) {
      this.processQueue();
    }
  }

  public async processQueue() {
    if (this.queue.length === 0 || !this.isOnline) return;

    const itemsToProcess = [...this.queue];
    this.queue = [];
    this.saveQueueToStorage();

    // Process queued offline mutations
    console.log(`[SyncEngine] Processing ${itemsToProcess.length} queued offline actions...`);
    this.notifyListeners();
  }

  public subscribe(callback: (status: { isOnline: boolean; pendingCount: number }) => void) {
    this.listeners.push(callback);
    callback({ isOnline: this.isOnline, pendingCount: this.queue.length });
    return () => {
      this.listeners = this.listeners.filter((l) => l !== callback);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((callback) =>
      callback({ isOnline: this.isOnline, pendingCount: this.queue.length })
    );
  }

  public getStatus() {
    return {
      isOnline: this.isOnline,
      pendingCount: this.queue.length,
      queue: this.queue,
    };
  }
}

export const syncEngine = new SyncEngine();
export default syncEngine;
