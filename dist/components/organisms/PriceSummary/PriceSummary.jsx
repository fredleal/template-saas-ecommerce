'use client';
import React from 'react';
import { ListPrice } from '../../atoms/ListPrice/ListPrice';
import { MainPrice } from '../../atoms/MainPrice/MainPrice';
import { InstallmentsPrice } from '../../molecules/InstallmentsPrice/InstallmentsPrice';
import { PixDiscount } from '../../molecules/PixDiscount/PixDiscount';
export const PriceSummary = ({ originalPrice, currentPrice, pixPrice, pixDiscountPercent, installments, currency = 'BRL', locale = 'pt-BR', size = 'md', className = '', }) => {
    // Show list price only if it's higher than current price
    const showListPrice = originalPrice && originalPrice > currentPrice;
    return (<div className={`flex flex-col gap-2 ${className}`} data-testid="price-summary">
      {/* List Price (strikethrough original price) */}
      {showListPrice && (<ListPrice value={originalPrice} currency={currency} locale={locale} size={size}/>)}

      {/* Main Price (current price) */}
      <MainPrice value={currentPrice} currency={currency} locale={locale} size={size}/>

      {/* PIX Discount */}
      {pixPrice && (<PixDiscount originalPrice={currentPrice} pixPrice={pixPrice} discountPercent={pixDiscountPercent} currency={currency} locale={locale} size={size}/>)}

      {/* Installments */}
      {installments && (<InstallmentsPrice installments={installments.count} value={installments.value} withInterest={installments.withInterest} currency={currency} locale={locale} size={size}/>)}
    </div>);
};
//# sourceMappingURL=PriceSummary.jsx.map