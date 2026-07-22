# LocalLens AI — Local Food Database Schema Specification

Developer: Pinank Shah (`pinankshah-Ab`)

---

- `Restaurant`: Name, destination, coordinates, opening hours, rating.
- `LocalDish`: Name, cuisine, price estimate, diet category, food story.
- `SavedFood`: User references to saved food items and custom notes.
- `FoodHistory`: Audit log of food discovery requests.
- `NutritionProfile`: Calorie, macro, and allergen breakdown per dish.
- `FoodRecommendationCache`: Transient TTL document cache for AI food requests.
