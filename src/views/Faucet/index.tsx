import React from 'react'; 
import Link from 'next/link';

const style = {
    faucetMenuWrapper : `flex flex-col relative z-10 mx-auto mt-16 h-auto w-full max-w-md rounded-3xl bg-bg-card-light p-7 pt-6 shadow-card dark:bg-bg-card-dark dark:shadow-card-dark`,
    header : `mb-[27px] text-xl font-bold text-left`,
    desc : `mb-[27px]`,
    zkSyncText : `text-[#8C8DFC] cursor-pointer font-semibold`,
    button : `flex select-none items-center justify-center bg-button-blue  leading-none font-normal 
    cursor-pointer text-white h-[55px] text-lg leading-[24px] rounded-xl w-full shadow-blue-button hover:shadow-blue-button-hover`,
}

const FaucetMenu = () => {
    return (
        <div className={style.faucetMenuWrapper}>
            <div className={style.header}>
                Faucet
            </div>
            <div className={style.desc}>
                You can request tokens from our faucet for testing, once per account.
                <br></br><br></br>
                Please claim some tokens from <Link href="https://portal.zksync.io/faucet"><span className={style.zkSyncText}>the zkSync Portal</span></Link> first for gas.
            </div>
            <button className={style.button}>
                <span className="font-semibold">Claim Testnet Tokens</span>
            </button>
        </div>
    )
}

export default FaucetMenu;
