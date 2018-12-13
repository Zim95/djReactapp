from django.urls import path
from .views import ArticleDetailView, ArticleListView

urlpatterns = [
    path('<pk>',ArticleDetailView.as_view()),
    path('',ArticleListView.as_view())
    #path('acomplete/',ArticleCompleteView.as_view({'get':'list'}))
]