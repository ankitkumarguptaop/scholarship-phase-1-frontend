'use client';

import { Box, Skeleton, Typography } from '@mui/material';
import styles from '../../../components/personal-details/page.module.scss'; // Update with actual path

export default function Loading() {
  const renderInputRow = () => (
    <Box className={styles.basicDataInputContainer}>
      <Skeleton variant="rectangular" width={455} height={48} />
      <Skeleton variant="rectangular" width={455} height={48} />
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', height: 'auto', overflow: 'hidden' }}>
  {/* Left sidebar skeleton, 200px wide */}
  <Box sx={{ width: '150px' }}>
    <Skeleton variant="rectangular" width="150px" height="100%" />
  </Box>

  {/* Right main skeleton form */}
  <Box sx={{ flexGrow: 1, pl: 2, overflow: 'hidden' }}>
    <Box className={styles.personalDetailsContainer}>
      {/* Title */}
      <Box className={styles.personalDetailsTitle}>
        <Skeleton width={200} height={24} />
      </Box>

      {/* 1. Basic Data */}
      <Box className={styles.basicDataContainer}>
        <Skeleton width={150} height={24} sx={{ mb: 2 }} />
        {renderInputRow()}
        {renderInputRow()}
      </Box>

      {/* 2. Birth Data */}
      <Box className={styles.birthDataContainer}>
        <Skeleton width={150} height={24} sx={{ mb: 2 }} />
        {renderInputRow()}
        {renderInputRow()}
        <Box sx={{ width: 455, mt: 2 }}>
          <Skeleton variant="rectangular" width={455} height={48} />
        </Box>
      </Box>

      {/* 3. Financial Data */}
      <Box className={styles.financialDataContainer}>
        <Skeleton width={150} height={24} sx={{ mb: 2 }} />
        {renderInputRow()}
      </Box>

      {/* Financial Dependency */}
      <Box className={styles.financialDependentContainer}>
        <Skeleton width={300} height={24} sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" width={160} height={42} />
      </Box>

      {/* 4. Family Data */}
      <Box className={styles.familyDataContainer}>
        <Skeleton width={150} height={24} sx={{ mb: 2 }} />
        <Skeleton width={200} height={24} sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" width={160} height={42} />
      </Box>

      {/* Number of Children by Age */}
      <Box className={styles.numberOfChildrenContainer}>
        <Skeleton width={250} height={24} sx={{ mb: 2 }} />
        <Box className={styles.numberOfChildrenInputs}>
          {[...Array(4)].map((_, idx) => (
            <Skeleton key={idx} variant="rectangular" width={220} height={48} />
          ))}
        </Box>
      </Box>

      {/* Stepper Buttons */}
      <Box className={styles.stepperController}>
        <Skeleton variant="rectangular" width={120} height={40} />
        <Box className={styles.stepperActions}>
          <Skeleton variant="rectangular" width={120} height={40} />
          <Skeleton variant="rectangular" width={120} height={40} />
        </Box>
      </Box>
    </Box>
  </Box>
</Box>

  );
}
