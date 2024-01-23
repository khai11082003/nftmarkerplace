import React, { useState, useEffect } from "react";
import axios from "axios";
import MainHeader from "../../components/Header/MainHeader";
import { Contract, Interface, ethers } from "ethers";
import { JsonRpcProvider } from "ethers";
import "./create.scss";
import Web3 from "web3";
import abi from "./abi.json";
import TopHeader from "../../components/Header/TopHeader";
export default function Create() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uriImage, setUriImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const handledesc = (e) => {
    setDesc(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    const handleSubmission = async () => {
      if (uriImage) {
        try {
          const metadataForm = new FormData();

          const duLieuJSON = {
            name: "value1",
            imageUri: uriImage,
            key3: "value3",
          };

          const noidungJSON = JSON.stringify(duLieuJSON, null, 2);
          const blob = new Blob([noidungJSON], { type: "application/json" });
          metadataForm.append("file", blob);

          const res = await axios.post(
            "https://api.pinata.cloud/pinning/pinFileToIPFS",
            metadataForm,
            {
              maxBodyLength: "Infinity",
              headers: {
                "Content-Type": `multipart/form-data; boundary=${metadataForm._boundary}`,
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjZTFmNDM3Ny0yY2IxLTRkOGMtODUyZC04NmZhYmUxYTI3NGMiLCJlbWFpbCI6ImtoYWkxMTA4MjEwNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNjYzYTllZmQwNTA0ODE5Mjk0YmUiLCJzY29wZWRLZXlTZWNyZXQiOiJiOTI1MDU2ZGIyYWI5NThhMjY1MDViZDc3YjdiNjk5OTc2YjM1OGFjMDBjODA2MzlhOWRiM2E5N2JmYzY3MWNiIiwiaWF0IjoxNzA1MzAxMzg1fQ.-44-Tl1m4L6QRdMRZzAFtY9T7HEF63wd14wMJXvU3zc`,
              },
            }
          );
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      }
    };

    // Chỉ gọi handleSubmission khi uriImage có dữ liệu
    if (uriImage) {
      handleSubmission();
    }
  }, [uriImage]);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setName(event.target.value);
  };

  const regex = /\\([^\\]+)$/;
  const match = name.match(regex);

  if (match) {
    const imageName = match[1];
    setName(imageName);
  }

  const uploadToIPFS = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          maxBodyLength: "Infinity",
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjZTFmNDM3Ny0yY2IxLTRkOGMtODUyZC04NmZhYmUxYTI3NGMiLCJlbWFpbCI6ImtoYWkxMTA4MjEwNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNjYzYTllZmQwNTA0ODE5Mjk0YmUiLCJzY29wZWRLZXlTZWNyZXQiOiJiOTI1MDU2ZGIyYWI5NThhMjY1MDViZDc3YjdiNjk5OTc2YjM1OGFjMDBjODA2MzlhOWRiM2E5N2JmYzY3MWNiIiwiaWF0IjoxNzA1MzAxMzg1fQ.-44-Tl1m4L6QRdMRZzAFtY9T7HEF63wd14wMJXvU3zc`,
          },
        }
      );
      console.log(res);
      setUriImage(
        `https://aquamarine-obliged-nightingale-796.mypinata.cloud/ipfs/${res.data.IpfsHash}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Địa chỉ của smart contract NFT
  const contractAddress = "0xd4D2F3B67B25b43EaF125C71962192c04116D309";

  // ABI của smart contract NFT
  const contractAbi = abi;
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
        const contractInstance = new web3Instance.eth.Contract(
          contractAbi,
          contractAddress
        );
        setContract(contractInstance);
      } else {
        console.error(
          "Trình duyệt của bạn không hỗ trợ Web3. Hãy thử một trình duyệt khác."
        );
      }
    };

    initWeb3();
  }, []);

  const mint = async () => {
    try {
      const result = await contract.methods
        .mintNftToken(
          "https://aquamarine-obliged-nightingale-796.mypinata.cloud/ipfs/Qmbg3nLyXJrjoxLgYVB2mVJhpz8UhRtEHmY1V1RuixPgQW"
        )
        .send({ from: account })
        .on("transactionHash", function (hash) {
          console.log("Giao dịch được gửi, transactionHash:", hash);
        })
        .on("confirmation", function (confirmationNumber, receipt) {
          // Xác nhận giao dịch, bạn có thể thực hiện xử lý sau khi giao dịch được xác nhận
          console.log(
            "Giao dịch được xác nhận, confirmationNumber:",
            confirmationNumber,
            "receipt:",
            receipt
          );
        })
        .on("error", console.error); // Xử lý lỗi khi gặp lỗi

      const tokenId = result.events.TokenMinted.returnValues.tokenId; // Lấy thông tin về NFT mới tạo
      console.log("Token ID của NFT mới tạo:", tokenId);
      console.log(result.events.TokenMinted.returnValues);
    } catch (error) {
      console.error("Lỗi khi tạo NFT:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contract) {
      mint();
    }
  };

  return (
    <div style={{ backgroundColor: "#151515", height: "100vh" }}>
      <TopHeader />
      {/* <input type="file" onChange={changeHandler} />
      <button onClick={uploadToIPFS}>Upload to IPFS</button> */}
      <div className="main-create container-create">
        <div className="title-create">
          <div className="inner-title">Adidas NFT</div>
          <div className="inner-box" style={{ display: "flex" }}>
            <div className="box1" style={{ width: "50%" }}>
              <div className="box1--title" style={{ fontSize: "17px" }}>
                Choose create type (one only)
              </div>
              <div className="box1--main">
                <form onSubmit={handleSubmit}>
                  <div className="box">
                    <div className="button-1" onClick={uploadToIPFS}>
                      Upload Image
                    </div>
                    <input type="file" onChange={changeHandler} />
                  </div>
                  <div className="box">
                    <div className="button-1">NFT Name</div>
                    <input type="text" onChange={handleName} />
                  </div>
                  <div className="box">
                    <div className="button-1">NFT Information</div>
                    <textarea
                      name=""
                      id=""
                      cols="58"
                      rows="15"
                      onChange={handledesc}
                    ></textarea>
                  </div>
                  <input type="submit" className="submit" />
                </form>
              </div>
            </div>
            <div className="box2" style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
