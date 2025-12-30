import Devbar from '@/components/Devbar/Devbar';

const App = () => {
  return (
    <>
      <div className='fixed bottom-0 left-0 top-0'>
        <Devbar />
      </div>
      <div className='ml-[700px]'>
        <div className='flex h-screen flex-col items-center justify-center'>
          <h2>Let's build something great together</h2>
          <p className='text-muted-foreground'>
            Follow the steps on the left sidebar to start building
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
