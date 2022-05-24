import React, { useContext } from 'react';
import { PopupContext } from '../../context/PopupProvider';
import Image from 'next/image';
import Popup from '../../features/Popup';
import { connect } from '../Navbar/WalletPopup';

interface Network {
  name: string;
  image: string;
  status: boolean;
}

export const networks: Network[] = [
  {
    name: 'zkSync Testnet',
    image: '/network_icons/zksync_logo.svg',
    status: true,
  },
  {
    name: 'StarkNet Testnet',
    image: '/network_icons/starknet_logo.png',
    status: false,
  },
  {
    name: 'Polygon Testnet',
    image: '/network_icons/polygon_logo.svg',
    status: false,
  },
  {
    name: 'Ethereum Testnet',
    image: '/network_icons/eth_logo.png',
    status: false,
  },
];

const NetworksPopup = () => {
  const {
    networksPopupOpen: open,
    setNetworksPopupOpen: setOpen,
  } = useContext(PopupContext);

  function closeModal() {
    setOpen(false);
  }

  return (
    <Popup title="Networks" {...{ open, closeModal }}>
      <div className="mt-2.5">
        {networks.map(({ image, name, status }) => (
          <button
            disabled={!status}
            key={image}
            onClick={() => {
              connect();
              closeModal();
            }}
            className={"mt-5 flex w-full items-center gap-3 rounded-lg bg-slate-500 bg-opacity-0 p-3 text-lg font-bold shadow-card dark:border-bg-light dark:shadow-card-dark" + (status ? ' hover:shadow-button-hover dark:hover:shadow-button-hover-dark' : '')}
          >
            <Image src={image} width={30} height={30} />
            {name}
            <div
              className={`ml-auto mr-2 h-[9px] w-[9px] rounded-full shadow-inner ${status ? 'bg-green-500' : 'bg-red-500'
                } shadow-neutral-900/25`}
            ></div>
          </button>
        ))}
      </div>
    </Popup>
  );
};

export default NetworksPopup;
