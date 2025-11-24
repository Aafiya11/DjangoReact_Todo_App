
from django.urls import path
from .  import views
from rest_framework_simplejwt.views import(
     TokenRefreshView,
)

urlpatterns = [
    
    path('token/',views.TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('token/register/',views.RegisterView.as_view(),name='register'),
    path('token/refresh/',TokenRefreshView.as_view()),
    path('test/',views.testEndPoint,name='test'),
    path('',views.getRoutes),
    path('todo/<user_id>/',views.TodoListView.as_view()),
    path('todo-detail/<user_id>/<todo_id>/',views.TodoDetailView.as_view()),
    path('todo-mark-as-completed/<user_id>/<todo_id>/',views.TodoMarkAsCompleted.as_view())

]
