import Button from "./components/Button";
import ButtonGradient from "./svg/ButtonGradient";

export default function App() {
  return (
    <>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className="pt-[4.25rem] lg:pt-[5.25rem] overflow-hidden">
    <Button className="mt-10" href='#login'>
      Button
    </Button>
    </div>
    <ButtonGradient />
    </>
  )
}