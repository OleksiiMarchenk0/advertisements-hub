
from rest_framework.test import APITestCase
from rest_framework import status


class AddingCategoryTestCase(APITestCase):
    def test_add_category(self):
        data = {"id":"999", "name":"Test category",
                "ordering":"999"}
        response = self.client.post('/category/',data)
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)

class GettingOffersTestCase(APITestCase):
    def test_get_offers(self):
        response = self.client.get('/offers/')
        self.assertEqual(response.status_code,status.HTTP_200_OK)
