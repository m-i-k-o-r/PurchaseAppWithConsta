package com.inline.purchase.data.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LotDto {
    private Long lotId;
    private String lotName;
    private String lotDescription;
    private BigDecimal price;
    private String currencyCode;
    private String ndsRate;
    private Long customerCode;
}
