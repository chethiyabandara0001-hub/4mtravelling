import React, { createContext, useContext, useState } from 'react';
import { CURRENCIES } from '../data/siteConfig';

interface CurrencyContextType {
  currency: string;
  setCurrency: (code: string) => void;
  formatPrice: (usdAmount: number) => string;
  isCalcOpen: boolean;
  setIsCalcOpen: (open: boolean) => void;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'USD',
  setCurrency: () => {},
  formatPrice: (usd) => `$${usd}`,
  isCalcOpen: false,
  setIsCalcOpen: () => {},
});

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<string>('USD');
  const [isCalcOpen, setIsCalcOpen] = useState<boolean>(false);

  const formatPrice = (usdAmount: number): string => {
    const info = CURRENCIES[currency] || CURRENCIES.USD;
    const converted = Math.round(usdAmount * info.rateFromUsd);
    return `${info.symbol}${converted.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        isCalcOpen,
        setIsCalcOpen,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
