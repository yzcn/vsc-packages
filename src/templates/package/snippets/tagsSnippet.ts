import { NpmTags, TableListSnippet } from '../../../types';
import { tableListSnippet } from './';

export const tagsSnippet = (tags: NpmTags | undefined, packageName: string): string => {
  if (tags) {
    const items = Object.keys(tags).map(
      (tag: string): TableListSnippet => {
        return {
          label: tags[tag],
          value: tag,
        };
      }
    );

    return tableListSnippet(items, packageName, `Current Tags (${items.length})`);
  }

  return '';
};