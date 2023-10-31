import { useState } from 'react';
import Image from 'next/image';
import Swatches from './Swatches';

const colors = [
    {
      name: 'Crystal Black Silica',
      slug: 'crystal-black-silica',
      hex: '#0d0d0b'
    },
    {
      name: 'Ice Silver Metallic',
      slug: 'ice-silver-metallic',
      hex: '#dfdfdf'
    },
    {
      name: 'Magnetite Gray Metallic',
      slug: 'magnetite-gray-metallic',
      hex: '#5b5e64'
    },
    {
      name: 'Oasis Blue',
      slug: 'oasis-blue',
      hex: '#0078b4'
    },
    {
      name: 'Pure Red',
      slug: 'pure-red',
      hex: '#a51528'
    },
    {
      name: 'Crystal White Pearl',
      slug: 'crystal-white-pearl',
      hex: '#eeeeee'
    },
    {
      name: 'Sapphire Blue Pearl',
      slug: 'sapphire-blue-pearl',
      hex: '#00306d'
    }
];
  

const CarColorPicker = () => {
    // [state variable, set state function]
    const [activeColor, setActiveColor] = useState(colors[0]);

    return <section>
        <div 
            style={{ backgroundColor : activeColor.hex}}
        >
            <Image 
                src={`/images/impreza-${activeColor.slug}.webp`}
                alt={`Subaru Imreza ${activeColor.name}`}
                width={1150}
                height={607}
            />
        </div>
        <Swatches 
            data={colors} 
            changeHandler={setActiveColor} 
        />
        <h3>{activeColor.name}</h3>
    </section>
}
export default CarColorPicker;