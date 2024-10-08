import { useEffect, useState } from 'react'
import { Input, Select, Form, Button, Row, Col } from "antd";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchForm.module.css"
import { getListCity } from '../../services/cityService';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { City } from '../../interface/interface';



const SearchForm = () => {
    const navigate = useNavigate()
    const [cities, setCities] = useState<City[]>();
    useEffect(() => {
        const fectAPI = async () => {
            const response = await getListCity()
            if (response) {
                const allCities = {
                    key: 0,
                    value: "All"
                }
                setCities([allCities, ...response])
            }
        }
        fectAPI()
    }, [])

    const handleFinish = (values: { city: string, keyword: string }) => {
        const city = values.city === "All" || values.city === undefined ? "" : values.city;
        console.log("SEARCH", values.city, values.keyword)
        const params = {
            city: `${city}`,
            keyword: `${values.keyword ? values.keyword : ""}`,
        }
        navigate({
            pathname: "/search",
            search: `?${createSearchParams(params)}`
        })
    }
    return (
        <div className="sm:pt-8 sm:pb-2 container drop-shadow-xl rounded-md ">
            <Form onFinish={handleFinish}>
                <Row gutter={[10, 10]} className='justify-center !mx-0 !w-full'>
                    <Col xxl={5} xl={5} lg={5}>
                        <Form.Item className={styles.select} name="city">
                            <Select className={styles.select} options={cities} placeholder="Location" />
                        </Form.Item>
                    </Col>
                    <Col xxl={14} xl={14} lg={14}>
                        <Form.Item name="keyword">
                            <Input className={styles.select} placeholder="What position are you looking for ?" />
                        </Form.Item>
                    </Col>
                    <Col xxl={5} xl={5} lg={5}>
                        <Form.Item>
                            <Button className={styles.button} type="primary" htmlType="submit" block>
                                <FaSearch />
                                <div>Search</div>
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div >
    )
}

export default SearchForm