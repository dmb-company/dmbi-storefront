import React from 'react';
import TagsFilter from './tags-filter';
import { getProductTags } from '@/api/product-tags/api';

const TagsFilterWrap = async () => {
    const tags = await getProductTags();
    console.log(tags);
    return <TagsFilter tags={tags} />;
};

export default TagsFilterWrap;
