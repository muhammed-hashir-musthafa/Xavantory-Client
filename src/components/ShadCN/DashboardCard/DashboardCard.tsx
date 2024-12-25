import { Card, CardContent } from "@/components/ShadCN/ui/card";

const DashboardCard = ({ icon: Icon, value, label, color }) => {
  return (
    <Card className="w-full max-w-xs shadow-md border text-center">
      <CardContent className="flex flex-col items-center space-y-2 py-6">
        <div className={`text-4xl ${color}`}>
          <Icon />
        </div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
