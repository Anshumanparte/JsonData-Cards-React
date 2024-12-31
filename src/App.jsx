import './App.css'

function App() {
  const data = [
    {
      "id": 1,
      "name": "Aryan Mehta",
      "designation": "Frontend Developer",
      "email": "aryan.mehta@example.com",
      "imageUrl": "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      "id": 2,
      "name": "Sneha Patil",
      "designation": "Product Manager",
      "email": "sneha.patil@example.com",
      "imageUrl": "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      "id": 3,
      "name": "Karan Desai",
      "designation": "Graphic Designer",
      "email": "karan.desai@example.com",
      "imageUrl": "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
      "id": 4,
      "name": "Ankita Sharma",
      "designation": "Business Analyst",
      "email": "ankita.sharma@example.com",
      "imageUrl": "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
      "id": 5,
      "name": "Ankita Sharma",
      "designation": "Business Analyst",
      "email": "ankita.sharma@example.com",
      "imageUrl": "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
      "id": 6,
      "name": "Ankita Sharma",
      "designation": "Business Analyst",
      "email": "ankita.sharma@example.com",
      "imageUrl": "https://randomuser.me/api/portraits/women/14.jpg"
    }
  ];

  return (
    <>
      <div className='p-6 h-screen w-full bg-gray-900 flex justify-evenly items-center flex-wrap'>
        {data.map((elem,idx) => {
          return (
            <div
              key={elem.id}
              className='rounded-2xl p-20  bg-white flex flex-col gap-6 items-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300'
            >
              <div className='h-56 w-56 rounded-full  overflow-hidden'>
                <img
                  className='object-cover h-full w-full'
                  src={elem.imageUrl}
                  alt={elem.name}
                />
              </div>
              <h1 className='text-lg font-bold text-gray-800'>{elem.name}</h1>
              <h2 className='text-sm text-gray-500 font-medium'>
                {elem.designation}
              </h2>
              <p
                href={`mailto:${elem.email}`}
                className='text-sm text-black hover:text-blue-700 underline cursor-pointer'
              >
                {elem.email}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
