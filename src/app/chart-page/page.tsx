import Divider from "@/components/common/divider/CommonDivider";
import DonutChart from "@/components/feat/chart/DonutChart";
import PayChart from "@/components/feat/chart/PayChart";
import Header from "@/components/feat/header/CommonHeader";

export default function ChartPage () {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center w-full sm:w-3/4 mx-auto">
        <Divider title="카테고리별 지출">
          <DonutChart />
        </Divider>
        <Divider title="월별 수입/지출">
        <PayChart />
        </Divider>
      </div>
    </div>
  )
}