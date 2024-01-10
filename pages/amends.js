"use client"
import Damco from '@/Components/Layouts/Reports/success/Damco';
import NexusInfor from '@/Components/Layouts/Reports/success/NexusInfor';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import Loader from '@/Components/Shared/Loader';

const amends = () => {

  const [damcoData,setDamcoData] = useState([]);
  const [nexusdata,setNexusData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const company = Cookies.get("company");

  useEffect(() => {
    console.log("Effect triggered with company ID:", company);
    handleFetch();
  }, [company]);

  const handleFetch = async () => {
    console.log("Fetching data for company ID:", company);
    if(company !== 1){
      try {
        setIsLoading(true)
        const response = await axios.get(process.env.NEXT_PUBLIC_NEXUS_INFOR_SUCCESS_REPORTS);
        setNexusData(response.data.message);
      } catch (error) {
        console.error(error);
      }finally{
        setIsLoading(false);
      }
    }else{
      try {
        setIsLoading(true)
        const response = await axios.get(process.env.NEXT_PUBLIC_DAMCO_SUCCESS_REPORTS);
        setDamcoData(response.data.message);
      } catch (error) {
        console.error(error);
      } finally{
        setIsLoading(false);
      }
    } 
  }  

  return (
    <>
      <div>Ammend Reports</div>
      {
        isLoading ? <Loader /> : company !== 1 ? <NexusInfor data={nexusdata} /> :  <Damco data={damcoData} /> 
      }
    </>
  )
};

export default amends;
