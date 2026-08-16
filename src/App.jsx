import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <main className="pt-24">

        <section
          id="home"
          className="flex min-h-screen items-center justify-center"
        >
          <h1 className="text-5xl font-bold">
            My Portfolio
          </h1>
        </section>

      </main>

    </div>
  )
}

export default App