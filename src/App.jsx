import FlowingConv from "./components/FlowingConv";
import Grow from "./components/Grow";
import Logo from "./components/Logo";
import Mockups from "./components/Mockups";
import YourUsers from "./components/YourUsers";

const App = () => {
  return (

    <div className="bg-[url('./assets/images/bg-hero-desktop.svg')] bg-cover bg-no-repeat bg-white ">
      <header className="container mx-auto px-4">
        <div className="flex justify-between pt-8">
          <Logo />
          <button className="btn bg-gray-100 rounded-full border-2 py-2  px-3">Try it for free</button>

        </div>

        <div className=" flex justify-between my-20">
          <div>
            <p className="uppercase text-2xl font-bold text-black tracking-[0.3em] my-15 ">Build The Community <br />
              Your Fans Will Love</p>
            <p className="my-5">Huddle re-imagines the way we build communities. You have <br />
              a voice, but so does your audience. Create connections with <br />
              your users as you engage in genuine discussion.</p>
            <button className="btn bg-pink-500 rounded-full border-2 py-3 my-3 px-3">Get started for free</button>

          </div>
          <div className="">
            <Mockups />
          </div>
        </div>

      </header>

      <main className="container mx-auto px-4 mt-8">

      <div className="bg-white rounded-md container mx-auto px-4 py-4 mt-8 ">
          <section className="flex justify-center gap-4">
          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4 ">
<div>
          <h1 className="grow text-black text-4xl font-bold ">Grow Together</h1>   
          <p className="text-gray-400 font-semibold my-4">Generate meaningful discussions with your audience and <br />
build a strong, loyal community. Think of the insightful <br />
conversations you miss out on with a feedback form. </p>
          </div>    
            <Grow/>
              
          </article>
        </section>
          </div>
          
      <div className="bg-white rounded-md container mx-auto px-4 py-4 mt-8">
          
          <section className="flex justify-center gap-4">
          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4 ">
            <FlowingConv/>
            <div>
            <h1 className="grow text-black text-4xl font-bold ">flowing conversations</h1>  
            <p className="text-gray-400 font-semibold my-4">You wouldn't paginate a conversation in real life, so why do <br />
it online? Our threads have just-in-time loading for a more <br />
natural flow. </p>
            
            </div> 
            </article> 
                </section>
          </div>

          <div className="bg-white rounded-md container mx-auto px-4 py-4 mt-8">
          
          <section className="flex justify-center gap-4">
          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4 ">
         
            <div>
            <h1 className="grow text-black text-4xl font-bold ">Your users </h1>  
            <p className="text-gray-400 font-semibold my-4">It takes no time at all to integrate Huddle with your app's <br />
authentication solution. This means, once signed in to <br />
your app, your users can start chatting immediately. </p>
            
            </div> 
            <YourUsers/>
            </article> 
                </section>
          </div>
     
      </main>
    </div>


  )
}
export default App;