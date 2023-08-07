import UniqueSlick from '@/components/uniqueSlick/uniqueSlick';


export default function LandingPage() {
    return (
      <div
        style={{
          backgroundImage: "url('/images/home-sideface.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '100vh', // Set a minimum height
          marginTop: '-70px',
          zIndex: -99,
        }}
        className="flex justify-center h-full w-full flex-col m-0 p-0"
      >
       <UniqueSlick/>
      </div>
    );
  }
  