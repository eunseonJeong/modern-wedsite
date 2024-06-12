
import { file02, homeSmile, plusSquare, searchMd } from '../../img';

const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const HeroIcon = () =>{
    return (
         <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                  {heroIcons.map((icon, index) => (
                    <li className="p-5" key={index}>
                      <img src={icon} width={24} height={25} alt={icon} />
                    </li>
                  ))}
        </ul>
    )
}
