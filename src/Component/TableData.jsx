

import React , { useEffect, useState } from 'react'
import { TableComponent } from './TableComponent';
import { CustomButton } from './CustomButton';
import { Box, Grid } from '@mui/material';


// http://3.111.35.157:8080/v1/trend/crawl-trends
// http://localhost:8081/v1/trend/fetch-all

export const TableData = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch('http://localhost:8081/v1/trend/fetch-all'); 
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        setLoading(false);
      };

      useEffect(() => {
        fetchData();
      }, []);


      const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
          direction = 'descending';
        }
        setSortConfig({ key, direction });
      };
    
      const sortedData = React.useMemo(() => {
        let sortableData = [...data];
        if (sortConfig.key !== null) {
          sortableData.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
          });
        }
        return sortableData;
      }, [data, sortConfig]);


    return (
        <>
            <div>
                <Box sx={{maxWidth:'70%', margin:'12px auto'}}>
                    <Grid container alignItems="center" direction="row" justifyContent="space-between">
                        <Grid>
                            <CustomButton 
                                handleOnCrawl={fetchData}
                                disabled={loading}
                                lable={loading ? 'Crawling...' : 'Crawl'}
                            />
                        </Grid>
                        <Grid>
                            <CustomButton 
                                handleOnFetch='{}'
                                lable= 'Fetch Stock'
                            />
                        </Grid>
                    </Grid>
                </Box>
                
                <TableComponent data={sortedData} handleSort={handleSort} sortConfig={sortConfig} />
            </div>
        </>
        );
    };

      

