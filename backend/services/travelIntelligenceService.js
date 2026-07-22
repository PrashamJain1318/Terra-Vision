export const travelIntelligenceService = {
  getLiveTelemetry: (city = 'Goa') => {
    return {
      city,
      timestamp: new Date().toISOString(),
      weatherAlert: {
        status: 'Active Advisory',
        summary: 'Light afternoon rain expected between 3:30 PM – 4:30 PM',
        tempC: 28,
        humidity: '74%',
        uvIndex: 4,
        aqi: 38,
        aqiLabel: 'Good'
      },
      localEvents: [
        { id: 'ev_1', name: 'Goa International Food & Jazz Fest', location: 'Panaji Promenade', time: '7:00 PM Today' },
        { id: 'ev_2', name: 'Sunset Acoustic Guitar Jam', location: 'Anjuna Beach', time: '5:45 PM Today' }
      ],
      flightStatus: {
        flightNo: 'AI-302',
        status: 'On Time',
        departureGate: 'B12',
        estDeparture: '14:30'
      },
      transitUpdates: {
        trainStatus: 'Vande Bharat Express: On Time (+0 min)',
        trafficCongestion: 'Low on NH66 • Normal speeds'
      },
      crowdTelemetry: {
        level: 'Moderate',
        peakHours: '4:30 PM – 6:30 PM',
        recommendedTime: 'Morning 7:00 AM – 10:00 AM'
      },
      safetyAdvisory: {
        level: 'Level 1 (Exercise Normal Precautions)',
        policeHelpline: '112',
        touristPolice: '1364',
        hospitalDistanceKm: 1.8
      }
    };
  }
};

export default travelIntelligenceService;
