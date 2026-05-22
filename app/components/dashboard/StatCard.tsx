type StatCardProps = {
  title: string
  value: string
  change: string
}

const StatCard = ({ title, value, change }: StatCardProps) => {
    return (
        <div className=" bg-gray-900 rounded-xl p-6 flex-1">
            <div className="text-gray-400 text-sm mb-2">{title}</div>
            <div className="text-white text-2xl font-bold mb-1">{value}</div>
            <div className={change.startsWith('-') ? 'text-red-400 text-sm' : 'text-green-400 text-sm'}>{change}</div>
        </div>
    )
}

export default StatCard