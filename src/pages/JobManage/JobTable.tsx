import { useEffect, useState } from 'react'
import { getCookie } from '../../helpers/cookie'
import { Job } from '../../interface/interface'
import { getJobsByCompanyId } from '../../services/jobService'
import { Button, Table, Tag, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
import EditJob from './EditJob'
import DeleteJob from './DeleteJob'
import { ColumnsType } from 'antd/es/table'
import Loading from '../../components/Loading/Loading'

const JobTable = () => {
	const idCompany = getCookie("id")
	const [jobs, setJobs] = useState(undefined)
	const fetchAPI = async (idCompany) => {
		const response = await getJobsByCompanyId(parseInt(idCompany))
		if (!response.error) {
			setJobs(response)
		}
		else {
			setJobs(undefined)
		}
	}
	useEffect(() => {
		fetchAPI(idCompany || "")
	}, [idCompany])
	if (!jobs) {
		return (
			<div className='flex justify-center items-center mx-auto mt-12'>
				<Loading size={12} ></Loading>
			</div>
		)
	}
	const handleReload = () => {
		fetchAPI(idCompany || "")
	}
	const columns: ColumnsType<Job> = [
		{
			title: "Job",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Tags",
			dataIndex: "tags",
			key: "tags",
			render: (_, record: Job) =>
				(record.tags || []).map((item: string, index: number) => (
					<Tag className='mb-5' color="blue" key={index}>{item}</Tag>
				))
		},
		{
			title: "Salary",
			dataIndex: "salary",
			key: "salary"
		},
		{
			title: "Time",
			key: "time",
			render: (_, record: Job) => (
				<>
					<small>Created at: {record.createAt}</small>
					<br />
					<small>Updated at: {record.updateAt}</small>
				</>
			)
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			render: (_, record: Job) => (
				<>
					{record.status ? (
						<Tag color="green">Active</Tag>
					) : (
						<Tag color="red">Inactive</Tag>
					)}
				</>
			)
		},
		{
			title: "Action",
			key: "actions",
			render: (_, record: Job) => (
				<div className='flex'>
					<Link to={`/detail-job/${record.id}`}>
						<Tooltip title="Detail">
							<Button icon={<EyeOutlined />}></Button>
						</Tooltip>
					</Link>
					<EditJob record={record} onReload={handleReload} />
					<DeleteJob record={record} onReload={handleReload} />
				</div>
			)
		}
	]

	return (
		<>
			<div className='mt-4'>
				<Table scroll={{ x: 400 }} dataSource={jobs} columns={columns} rowKey="id"></Table>
			</div>
		</>
	)
}

export default JobTable