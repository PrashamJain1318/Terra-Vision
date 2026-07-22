# LocalLens AI — Hidden Gems Database Schema Specification

Developer: Pinank Shah (`pinankshah-Ab`)

---

- `HiddenGem`: Destination, location coordinates, experience score, crowd level, best visit time, and AI story.
- `SavedHiddenGem`: User references to saved secret spots and custom travel notes.
- `HiddenGemHistory`: Audit log of past discovery requests.
- `RecommendationCache`: Transient TTL document cache preventing redundant provider API calls.
