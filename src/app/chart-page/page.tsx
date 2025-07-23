import Divider from "@/components/common/divider/CommonDivider";
import DonutChart from "@/components/feat/chart/DonutChart";
import Header from "@/components/feat/header/CommonHeader";
import MonthlyHeader from "@/components/feat/header/MonthlyHeader";

export default function ChartPage () {
  return (
    <div>
      <Header />
      <div className="flex justify-center pt-20 sm:justify-start">
        <MonthlyHeader />        
      </div>
      <div className="flex justify-center w-full sm:w-3/4 mx-auto">
        <Divider title="카테고리별 지출">
          <DonutChart />
        </Divider>
      </div>
    </div>
  )
}