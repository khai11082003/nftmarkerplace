import TopHeader from "../../components/Header/TopHeader";
function CreateNft() {
 
  return (
    <div style={{backgroundColor: "#151515"}}>
      <TopHeader/>
      {/* <input type="file" onChange={changeHandler} />
      <button onClick={uploadToIPFS}>Upload to IPFS</button> */}
      <div className="main-create" >
      <div className="title-create">
        <div className="inner-title">
          Choose your Category
        </div>
      </div>
      <div className="inner--filter container-create">Filter</div>
      <div className="inner--category container-create">
        <div className="but">
          <div className="cate">1155</div>
          <div className="cate">NFT</div>
        </div>
        <div className="contact-us">Cannot find your Category? <span style={{color: 'blue'}}>contact us</span></div>
      </div>
      </div>
    </div>
  );
}

export default CreateNft;
