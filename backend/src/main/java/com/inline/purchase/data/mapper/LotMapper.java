package com.inline.purchase.data.mapper;

import com.inline.purchase.data.dto.LotDto;
import com.inline.purchase.models.Lot;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface LotMapper {
    LotMapper INSTANCE = Mappers.getMapper(LotMapper.class);

    LotDto toDto(Lot item);

    List<LotDto> toDto(List<Lot> items);
}
