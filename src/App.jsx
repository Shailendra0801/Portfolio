/**
 * @copyright 2024 Shailendra
 * @license Apache-2.0
*/


/**
 * Components
 */
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work  />
      </main>
    </>
  )
}

export default App;