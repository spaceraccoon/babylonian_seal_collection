from rest_framework import permissions


class IsCreatorOrAdminOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow creators of an object or admins to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the creator of the snippet.
        return obj.creator == request.user or request.user.is_staff or request.user.is_superuser
