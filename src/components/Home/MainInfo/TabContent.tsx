import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../CustomButton.tsx";
import { AppColor } from "../../../constants/color";
import ProductReview from "./ProductReview";
import Comments from "./Comments";

interface TabContentProps {}

const TabContent: React.FC<TabContentProps> = ({}) => {
  const [openHeight, setOpenHeight] = useState<boolean>(false);
  return (
    <>
      <Box
        sx={{
          maxHeight: `${openHeight ? "none" : "1000px"}`,
          overflow: "hidden",
          marginBottom: "20px",
          position: `${openHeight ? "none" : "relative"}`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: "90%",
            left: 0,
            right: 0,
            width: "100%",
            height: "10%",
            background: "linear-gradient(rgba(255,255,255,0),white)",
          },
        }}
      >
        <Typography
          component={"p"}
          variant="body1"
          sx={{
            paddingTop: "14px",
            fontSize: 14,
            fontWeight: 700,
            textAlign: "justify",
          }}
        >
          Với sự giúp sức của chip M2, MacBook Pro 2022 trở nên chuyên nghiệp
          hơn bao giờ hết. Kết cấu nhỏ nhắn, thời lượng pin 20 giờ và hệ thống
          làm mát hiệu quả giúp sản phẩm duy trì hiệu suất cao trong thời gian
          dài. Màn hình Retina, camera FaceTime HD và micro studio cũng là điểm
          cộng đem đến trải nghiệm xuất sắc.
        </Typography>
        <Typography
          component={"h3"}
          variant="body1"
          sx={{ fontSize: 17, fontWeight: 700, margin: "16px 0" }}
        >
          Mạnh mẽ hơn và chuyên nghiệp hơn
        </Typography>
        <Typography component={"p"} variant="body1" sx={{ padding: "0 10px" }}>
          <img
            style={{ width: "100%", height: "auto" }}
            src="../images/laptop-macbook/27684_11.jpg"
            alt="images"
          />
        </Typography>
        <Typography
          component={"p"}
          variant="body1"
          sx={{ fontSize: "14px", fontWeight: 500, margin: "14px 0" }}
        >
          Mang trong mình chip xử lý Apple M2 nhanh hơn 1.4 lần so với chip M1,
          MacBook Pro M2 sẽ giúp bạn giải quyết nhanh gọn mọi công việc nhờ CPU
          8 nhân mạnh mẽ và GPU 10 lõi cực nhanh. Khả năng xử lý các tác vụ đồ
          họa hiệu quả giúp sản phẩm dễ dàng làm việc với nhiều luồng video 4K
          và 8K định dạng ProRes. Với M2, MacBook Pro 2022 đã đạt đến một bước
          tiến mới về sức mạnh cũng như độ chuyên nghiệp.
        </Typography>

        <Typography
          component={"h3"}
          variant="body1"
          sx={{ fontSize: 17, fontWeight: 700, margin: "16px 0" }}
        >
          Tản nhiệt hiệu quả, hiệu suất chuyên sâu
        </Typography>
        <Typography
          component={"p"}
          variant="body1"
          sx={{ fontSize: "14px", fontWeight: 500, margin: "14px 0" }}
        >
          MacBook Pro M2 2022 được trang bị cơ chế làm mát hiệu quả, giúp duy
          trì hiệu suất nhanh nhạy xuyên suốt và tối ưu hóa khả năng vận hành
          của chip Apple M2 ở mức tốt nhất. Nhờ đó, chủ nhân thiết bị sẽ dễ dàng
          chạy các tác vụ chuyên sâu về CPU và GPU trong nhiều giờ liên tục.
        </Typography>
        <Typography
          component={"h3"}
          variant="body1"
          sx={{ fontSize: 17, fontWeight: 700, margin: "16px 0" }}
        >
          Kết hợp nhịp nhàng giữa M2 và macOS
        </Typography>
        <Typography
          component={"p"}
          variant="body1"
          sx={{ fontSize: "14px", fontWeight: 500, margin: "14px 0" }}
        >
          Nền tảng macOS sẽ khéo léo tận dụng toàn bộ sức mạnh của chip M2 để
          mang lại tốc độ và khả năng phản hồi nhanh nhạy mọi tác vụ bạn thực
          hiện trên MacBook Pro 2022 – bao gồm cả phần mềm Microsoft 365 và các
          ứng dụng iOS mà bạn yêu thích. Đội ngũ Apple đã tối ưu hơn 10.000 ứng
          dụng để tương thích tốt nhất với chip M2, từ đó đem lại trải nghiệm
          nhanh nhạy nhất, ấn tượng nhất.
        </Typography>
        <Typography
          component={"h3"}
          variant="body1"
          sx={{ fontSize: 17, fontWeight: 700, margin: "16px 0" }}
        >
          Chỉnh sửa video chuyên nghiệp như studio
        </Typography>
        <Typography
          component={"p"}
          variant="body1"
          sx={{ fontSize: "14px", fontWeight: 500, margin: "14px 0" }}
        >
          MacBook Pro M2 2022 sẽ khiến bạn thực sự bất ngờ về năng lực mã hóa và
          giải mã định dạng ProRes. Bạn có thể phát và chỉnh sửa tối đa 11 luồng
          video 4K ProRes và tối đa 2 luồng video 8K ProRes – bao gồm cả những
          video 4K ProRes được thực hiện trên iPhone 13 Pro, đồng thời chuyển
          đổi dữ liệu sang định dạng ProRes nhanh gấp ba lần so với trước đây.
        </Typography>
        <Typography
          component={"h3"}
          variant="body1"
          sx={{ fontSize: 17, fontWeight: 700, margin: "16px 0" }}
        >
          Chỉnh sửa video chuyên nghiệp như studio
        </Typography>
        <Typography
          component={"p"}
          variant="body1"
          sx={{ fontSize: "14px", fontWeight: 500, margin: "14px 0" }}
        >
          MacBook Pro M2 2022 sẽ khiến bạn thực sự bất ngờ về năng lực mã hóa và
          giải mã định dạng ProRes. Bạn có thể phát và chỉnh sửa tối đa 11 luồng
          video 4K ProRes và tối đa 2 luồng video 8K ProRes – bao gồm cả những
          video 4K ProRes được thực hiện trên iPhone 13 Pro, đồng thời chuyển
          đổi dữ liệu sang định dạng ProRes nhanh gấp ba lần so với trước đây.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CustomButton
          sx={{
            display: `${openHeight ? "none" : "block"}`,
            border: `1px solid ${AppColor.textColorButton}`,
            bgcolor: AppColor.white,
            color: AppColor.textColorButton,
            padding: "10px 0",
            lineHeight: "normal",
            width: "229px",
            margin: "15px auto 10px",
            fontSize: "13px",
            textTransform: "none",
            "&:hover": {
              bgcolor: AppColor.textColorButton,
              color: AppColor.white,
            },
          }}
          onClick={() => setOpenHeight(true)}
        >
          Xem thêm
        </CustomButton>
      </Box>
      <ProductReview />
      <Divider sx={{ margin: "20px 0" }} />
      <Comments />
    </>
  );
};

export default TabContent;
