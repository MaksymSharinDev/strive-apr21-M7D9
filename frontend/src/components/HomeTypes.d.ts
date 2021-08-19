

type homePageProps = {
    title: string
}
/*
{
    "id": 0,
    "name": "Carbonara",
    "image": "/assets/images/carbonara.jpg",
    "category": "mains",
    "label": "Fat",
    "price": "7.99",
    "description": "Pasta with Guanciale (a kind of bacon), Pecorino (sheep cheese), Pepper, Salt and Eggs.",
    "comments": [
      {
        "id": 0,
        "rating": 5,
        "comment": "Wow! One of the best pasta I ever had!",
        "author": "Tobia De Angelis",
        "date": "2020-10-16T17:57:28.556094Z"
      },
      ...
    ]
  },
 */

type dishObj = {
    id: number,
    name: string,
    image: URL,
    category: string,
    label: string,
    price: float,
    description: string,
    comments: array<commentObj>
}

export {homePageProps , dishObj}