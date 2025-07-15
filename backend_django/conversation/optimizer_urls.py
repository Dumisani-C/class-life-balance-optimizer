from rest_framework.routers import DefaultRouter
from .views import StudentPreferencesViewSet, ActivityViewSet, GeneratedPlanViewSet

router = DefaultRouter()
router.register('preferences', StudentPreferencesViewSet)
router.register('activities', ActivityViewSet)
router.register('plans', GeneratedPlanViewSet)

urlpatterns = router.urls


