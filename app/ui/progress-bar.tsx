'use client';

import { useState, useEffect, useCallback } from 'react';
import { Progress, Typography } from "@material-tailwind/react";

export function ProgressBar({ value, pgNo, pgLen }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(value > 100 ? 100 : value < 0 ? 0 : value);
  }, [value]);

  const handleMinusClick = useCallback((pgLen, pgNo) => {
    setProgress(prevProgress => {
      const newProgress = Math.ceil((pgNo / pgLen) * 100);
      return newProgress < 0 ? 0 : newProgress;
    });
  }, []);

  const handlePlusClick = useCallback((pgLen, pgNo) => {
    setProgress(prevProgress => {
      const newProgress = Math.ceil((pgNo / pgLen) * 100);
      return newProgress > 100 ? 100 : newProgress;
    });
  }, []);

  return {
    progress,
    handleMinusClick,
    handlePlusClick,
    Component: (
      <div className="w-3/4 mx-auto mt-2">
        <div className="mb-2 flex justify-start">
          <Typography color="blue-gray" variant="h6">Step {pgNo} / {pgLen}</Typography>
        </div>

        <Progress value={progress} size="lg"  />
      </div>
    ),
  };
}
