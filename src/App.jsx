import Button from "./components/Button";
import ButtonGradient from "./img/svg/ButtonGradient";

export default function App() {
    return (
        <> 
          <div className="pt-[4.25rem] lg:pt-[5.25rem] overflow-hidden">
              <Button className="mt-10" href='#login'>
                  Button
              </Button>
          </div>
          <ButtonGradient/>
      </>
    )
  }