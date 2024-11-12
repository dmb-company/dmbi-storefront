import React from 'react';
import TagsFilter from './tags-filter';
import { getProductTags } from '@/api/product-tags/api';

const TagsFilterWrap = async () => {
    const tags = await getProductTags();
    return <TagsFilter tags={tags} />;
};

export default TagsFilterWrap;
