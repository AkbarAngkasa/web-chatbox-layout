import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/emkop-logo-transparent-landscape.png';
import DateRangeComp from './DateComponents/DataRangeComp';

export default function DateCostum() {
  return (
    <div className='mx-[5%] lg:w-[50%] lg:mx-auto my-10 grid grid-cols-1 place-content-center'>
      {/* Header */}
      <div>
        <Link to={"/"}>
          <Button pill={true} size="xs">
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
        </Link>
        <div className='my-4 border-b-2 border-slate-300'>
          <img src={logo} alt={logo} className="w-36 lg:w-40 align-middle inline-block" />
          <h1 className='inline-block align-middle border-l-2 pl-2 font-bold text-xl lg:text-2xl text-blue-800'>Date Component</h1>
        </div>
      </div>

      {/* Content */}
      <div>
        <DateRangeComp />
      </div>

    </div>
  )
}
