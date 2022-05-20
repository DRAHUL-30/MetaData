import {config} from './config';
import {ethers} from "ethers";
import MyNFT from './hardhat/artifacts/contracts/MyNFT.sol/MyNFT.json';

const {PUBLIC_KEY} = config;
export const contractAddress = '0xa757FA2820Ba084461AE90BAA530Fa5623afC3bD';
const contract = MyNFT;
const provider = new ethers.providers.Web3Provider(window.ethereum);

export async function mintNFT() {
    const balance = await provider.getBalance(PUBLIC_KEY)
    console.log(`\nETH Balance of ${contractAddress} --> ${ethers.utils.formatEther(balance)} ETH\n`)
    const signer = provider.getSigner();
    console.log(signer,"signer");
    const contractnft = new ethers.Contract(contractAddress, contract.abi, signer);
    console.log(contractnft,"contract");
    // await contractnft.updateNumber(2)
    const num = await contractnft.number();
    console.log(num.toString());
    const name = await contractnft.name()
    const symbol = await contractnft.symbol()
    // const address = '0xFEC59474C770cD83ecFd2898ff5396a7436DD087';
    // const totalSupply = await contractnft.totalSupply()
    const balanceAnotherAccount = await contractnft.balanceOf('0xFEC59474C770cD83ecFd2898ff5396a7436DD087')

    return {
        num: num.toString(),
        name,
        symbol,
        balanceAnotherAccount,
        // totalSupply: totalSupply
    }

    // const senderBalanceBefore = await provider.getBalance(account1)
    // const recieverBalanceBefore = await provider.getBalance(account2)

    // console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    // console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    // const tx = await wallet.sendTransaction({
    //     to: account2,
    //     value: ethers.utils.parseEther("0.025")
    // })

    // await tx.wait()
    // console.log(tx)

    // const senderBalanceAfter = await provider.getBalance(account1)
    // const recieverBalanceAfter = await provider.getBalance(account2)

    // console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    // console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}