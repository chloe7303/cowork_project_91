import cartIcon from "../images/cart.png";
import likeIcon from "../images/like.png";
import Badge from "./Badge";

const StyledItem = ({
  imgSrc,
  badgeText,
  noBorderBottom,
}: {
  imgSrc: string;
  badgeText: string | null;
  noBorderBottom: boolean;
}) => {
  return (
    <div
      className={`flex justify-between p-5 pl-0 ml-5 border-solid border-[#D8D9D8] ${
        !noBorderBottom && "border-b"
      }`}
    >
      <div className="relative w-[108px] h-[128px] mr-4">
        <img src={imgSrc} alt="skirt" />
        {badgeText && <Badge text={badgeText} />}
      </div>
      <div className="">
        <h5 className="text-[#999999]">niko and ...</h5>
        <h4 className="mb-6 text-[14px]">
          LOWRYS FARM素色飄逸垂墜感修身百褶長裙-三色
        </h4>
        <small className="text-[#999999] line-through">NT$5</small>
        <div className="flex justify-between">
          <h4 className="text-primary text-[18px]">NT$200</h4>
          <div className="flex items-center">
            <img
              src={likeIcon}
              alt="cart"
              className="w-[20px] h-[20px] mr-[12px] cursor-pointer"
            />
            <img
              src={cartIcon}
              alt="like"
              className="w-[20px] h-[20px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledItem;
