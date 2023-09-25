from django.urls import path
from .views import LoginAPIView, UserRegistrationView, UserRoleView

urlpatterns = [
    path('login/', LoginAPIView.as_view(), name='login'),
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
     path('user-role/', UserRoleView.as_view(), name='user-role'),

]
