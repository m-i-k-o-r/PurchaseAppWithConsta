package com.inline.purchase.models;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "lot")
public class Lot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long lotId;
    private String lotName;
    private String lotDescription;
    private BigDecimal price;
    private String currencyCode;
    private String ndsRate;
    private Long customerCode;
}