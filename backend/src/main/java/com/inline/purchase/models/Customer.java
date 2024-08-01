package com.inline.purchase.models;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerCode;
    private String customerName;
    private String customerInn;
    private String customerPostalAddress;
    private String customerEmail;
    private boolean organizationFlag;
    private boolean personFlag;
}
