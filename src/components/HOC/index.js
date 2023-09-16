import React, {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';

import {MainData} from '../../Services/APIService';

const HOC = WrapperComp => {
  const HOC = props => {
    const Services = useQuery(['getData'], () => MainData());
    const [serviceData, setServiceData] = useState([]);
    const [addService, setAddService] = useState([]);
    const data = Services?.data?.data?.data?.purchased_services;

    useEffect(() => {
      if (data) {
        const getMainData = () => {
          try {
            const updatedServiceData = [];
            const updatedAddService = [];

            data.forEach(item => {
              const mainItem = item.purchased_office_template;
              const second = mainItem.purchased_office_services.filter(
                itm => itm.service_selected !== null,
              );

              if (second.length > 0) {
                updatedServiceData.push(...second);
              } else {
                const isAdd = mainItem.purchased_office_services.filter(
                  itm => itm.service_selected == null,
                );
                if (updatedAddService !== []) {
                  updatedAddService.push(...isAdd);
                }
              }
            });

            setServiceData(updatedServiceData);
            setAddService(prevAddService => [
              ...prevAddService,
              ...updatedAddService,
            ]);
          } catch (error) {
            console.log('Error in getMainData:', error);
          }
        };

        getMainData();
      }
    }, [data]);

    return (
      <WrapperComp {...props} service={serviceData} addService={addService} />
    );
  };

  return HOC;
};

export default HOC;
