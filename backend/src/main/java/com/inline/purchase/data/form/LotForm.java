package com.inline.purchase.data.form;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LotForm {
    private String lotName;
    private String lotDescription;
    private BigDecimal price;
    private String currencyCode;
    private String ndsRate;
    private Long customerCode;
}
