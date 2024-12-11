
function Categories() {
    const categories=[
  
        { id: 1, name: 'Graphic Tees', 
          image: 'https://media.istockphoto.com/id/1981743313/photo/red-and-pink-t-shirts-on-hangers-on-white-backdrop.webp?a=1&b=1&s=612x612&w=0&k=20&c=LgwgcscW1wYD3TUYadeMenrg3848RYDw--TVb7bEpYs=' },
          { id: 2, name: 'Distressed Jeans',
            image: 'https://media.istockphoto.com/id/91400468/photo/light-blue-jeans-with-a-dirty-wash-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=qZGrQCU9kxwiEz6U3KuZE_95ul160zPMMCVwwXBmZ3M=' },
            
          { id: 3, name: 'Hoodies',
             image: 'https://media.istockphoto.com/id/136798742/photo/brown-hooded-sweatshirt-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=raLNelpQPvwLodrK6Xs4_ucUHuTcfZkU3jljmEKEKkw=' },
          { id: 4, name: 'Summer Collection',
             image: 'https://media.istockphoto.com/id/952356090/photo/girls-cute-summer-cotton-attire.webp?a=1&b=1&s=612x612&w=0&k=20&c=lnZnaFw8Ow30XjhX_i5dU5RwSxBwb2fnyBcmqD68vHQ=' },
        
      ]
  return (

<div className="p-2">
<h2 className="text-2xl font-bold text-center m-6">Trending Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {categories.map((category) => (
          <div key={category.id} className="relative rounded-lg overflow-hidden shadow-md">
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
</div>
  )
}

export default Categories