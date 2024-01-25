import { enumType, inputObjectType, objectType } from 'nexus'

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: [
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable',
  ],
})

export const FormScalarFieldEnum = enumType({
  name: 'FormScalarFieldEnum',
  members: [
    'id',
    'name',
    'ownerId',
    'order',
    'style',
    'favorite',
    'folderId',
    'createdAt',
    'updatedAt',
  ],
})

export const FormItemScalarFieldEnum = enumType({
  name: 'FormItemScalarFieldEnum',
  members: [
    'id',
    'name',
    'order',
    'section',
    'formId',
    'required',
    'items',
    'image',
    'type',
  ],
})

export const FolderScalarFieldEnum = enumType({
  name: 'FolderScalarFieldEnum',
  members: ['id', 'name', 'ownerId'],
})

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

export const NullableJsonNullValueInput = enumType({
  name: 'NullableJsonNullValueInput',
  members: ['DbNull', 'JsonNull'],
})

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive'],
})

export const JsonNullValueFilter = enumType({
  name: 'JsonNullValueFilter',
  members: ['DbNull', 'JsonNull', 'AnyNull'],
})

export const NullsOrder = enumType({
  name: 'NullsOrder',
  members: ['first', 'last'],
})

export const FormType = enumType({
  name: 'FormType',
  members: [
    'SHORT',
    'LONG',
    'SINGLE_CHOICE',
    'MULTIPLE_CHOICE',
    'DROPDOWN',
    'LINEAR_SCALE',
    'DATE',
  ],
})

export const FormWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'FormWhereInput' })
    t.list.field('OR', { type: 'FormWhereInput' })
    t.list.field('NOT', { type: 'FormWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('ownerId', { type: 'StringFilter' })
    t.field('order', { type: 'IntFilter' })
    t.field('style', { type: 'JsonNullableFilter' })
    t.field('favorite', { type: 'BoolFilter' })
    t.field('folderId', { type: 'StringNullableFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('items', { type: 'FormItemListRelationFilter' })
    t.field('Folder', { type: 'FolderNullableRelationFilter' })
  },
})

export const FormOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('style', { type: 'SortOrderInput' })
    t.field('favorite', { type: 'SortOrder' })
    t.field('folderId', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('items', { type: 'FormItemOrderByRelationAggregateInput' })
    t.field('Folder', { type: 'FolderOrderByWithRelationInput' })
  },
})

export const FormWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('ownerId_name', { type: 'FormOwnerIdNameCompoundUniqueInput' })
    t.list.field('AND', { type: 'FormWhereInput' })
    t.list.field('OR', { type: 'FormWhereInput' })
    t.list.field('NOT', { type: 'FormWhereInput' })
    t.field('name', { type: 'StringFilter' })
    t.field('ownerId', { type: 'StringFilter' })
    t.field('order', { type: 'IntFilter' })
    t.field('style', { type: 'JsonNullableFilter' })
    t.field('favorite', { type: 'BoolFilter' })
    t.field('folderId', { type: 'StringNullableFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('items', { type: 'FormItemListRelationFilter' })
    t.field('Folder', { type: 'FolderNullableRelationFilter' })
  },
})

export const FormOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('style', { type: 'SortOrderInput' })
    t.field('favorite', { type: 'SortOrder' })
    t.field('folderId', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'FormCountOrderByAggregateInput' })
    t.field('_avg', { type: 'FormAvgOrderByAggregateInput' })
    t.field('_max', { type: 'FormMaxOrderByAggregateInput' })
    t.field('_min', { type: 'FormMinOrderByAggregateInput' })
    t.field('_sum', { type: 'FormSumOrderByAggregateInput' })
  },
})

export const FormScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'FormScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'FormScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'FormScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('ownerId', { type: 'StringWithAggregatesFilter' })
    t.field('order', { type: 'IntWithAggregatesFilter' })
    t.field('style', { type: 'JsonNullableWithAggregatesFilter' })
    t.field('favorite', { type: 'BoolWithAggregatesFilter' })
    t.field('folderId', { type: 'StringNullableWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const FormItemWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'FormItemWhereInput' })
    t.list.field('OR', { type: 'FormItemWhereInput' })
    t.list.field('NOT', { type: 'FormItemWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('order', { type: 'IntFilter' })
    t.field('section', { type: 'IntFilter' })
    t.field('formId', { type: 'StringFilter' })
    t.field('required', { type: 'BoolFilter' })
    t.field('items', { type: 'JsonNullableFilter' })
    t.field('image', { type: 'JsonNullableFilter' })
    t.field('type', { type: 'EnumFormTypeFilter' })
    t.field('Form', { type: 'FormRelationFilter' })
  },
})

export const FormItemOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('section', { type: 'SortOrder' })
    t.field('formId', { type: 'SortOrder' })
    t.field('required', { type: 'SortOrder' })
    t.field('items', { type: 'SortOrderInput' })
    t.field('image', { type: 'SortOrderInput' })
    t.field('type', { type: 'SortOrder' })
    t.field('Form', { type: 'FormOrderByWithRelationInput' })
  },
})

export const FormItemWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.list.field('AND', { type: 'FormItemWhereInput' })
    t.list.field('OR', { type: 'FormItemWhereInput' })
    t.list.field('NOT', { type: 'FormItemWhereInput' })
    t.field('name', { type: 'StringFilter' })
    t.field('order', { type: 'IntFilter' })
    t.field('section', { type: 'IntFilter' })
    t.field('formId', { type: 'StringFilter' })
    t.field('required', { type: 'BoolFilter' })
    t.field('items', { type: 'JsonNullableFilter' })
    t.field('image', { type: 'JsonNullableFilter' })
    t.field('type', { type: 'EnumFormTypeFilter' })
    t.field('Form', { type: 'FormRelationFilter' })
  },
})

export const FormItemOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('section', { type: 'SortOrder' })
    t.field('formId', { type: 'SortOrder' })
    t.field('required', { type: 'SortOrder' })
    t.field('items', { type: 'SortOrderInput' })
    t.field('image', { type: 'SortOrderInput' })
    t.field('type', { type: 'SortOrder' })
    t.field('_count', { type: 'FormItemCountOrderByAggregateInput' })
    t.field('_avg', { type: 'FormItemAvgOrderByAggregateInput' })
    t.field('_max', { type: 'FormItemMaxOrderByAggregateInput' })
    t.field('_min', { type: 'FormItemMinOrderByAggregateInput' })
    t.field('_sum', { type: 'FormItemSumOrderByAggregateInput' })
  },
})

export const FormItemScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'FormItemScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'FormItemScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'FormItemScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('order', { type: 'IntWithAggregatesFilter' })
    t.field('section', { type: 'IntWithAggregatesFilter' })
    t.field('formId', { type: 'StringWithAggregatesFilter' })
    t.field('required', { type: 'BoolWithAggregatesFilter' })
    t.field('items', { type: 'JsonNullableWithAggregatesFilter' })
    t.field('image', { type: 'JsonNullableWithAggregatesFilter' })
    t.field('type', { type: 'EnumFormTypeWithAggregatesFilter' })
  },
})

export const FolderWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'FolderWhereInput' })
    t.list.field('OR', { type: 'FolderWhereInput' })
    t.list.field('NOT', { type: 'FolderWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('ownerId', { type: 'StringFilter' })
    t.field('Forms', { type: 'FormListRelationFilter' })
  },
})

export const FolderOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
    t.field('Forms', { type: 'FormOrderByRelationAggregateInput' })
  },
})

export const FolderWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('ownerId_name', { type: 'FolderOwnerIdNameCompoundUniqueInput' })
    t.list.field('AND', { type: 'FolderWhereInput' })
    t.list.field('OR', { type: 'FolderWhereInput' })
    t.list.field('NOT', { type: 'FolderWhereInput' })
    t.field('name', { type: 'StringFilter' })
    t.field('ownerId', { type: 'StringFilter' })
    t.field('Forms', { type: 'FormListRelationFilter' })
  },
})

export const FolderOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
    t.field('_count', { type: 'FolderCountOrderByAggregateInput' })
    t.field('_max', { type: 'FolderMaxOrderByAggregateInput' })
    t.field('_min', { type: 'FolderMinOrderByAggregateInput' })
  },
})

export const FolderScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'FolderScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'FolderScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'FolderScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('ownerId', { type: 'StringWithAggregatesFilter' })
  },
})

export const FormCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('items', { type: 'FormItemCreateNestedManyWithoutFormInput' })
    t.field('Folder', { type: 'FolderCreateNestedOneWithoutFormsInput' })
  },
})

export const FormUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'Boolean' })
    t.field('folderId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('items', {
      type: 'FormItemUncheckedCreateNestedManyWithoutFormInput',
    })
  },
})

export const FormUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('items', { type: 'FormItemUpdateManyWithoutFormNestedInput' })
    t.field('Folder', { type: 'FolderUpdateOneWithoutFormsNestedInput' })
  },
})

export const FormUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('folderId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('items', {
      type: 'FormItemUncheckedUpdateManyWithoutFormNestedInput',
    })
  },
})

export const FormCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'Boolean' })
    t.field('folderId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const FormUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const FormUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('folderId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const FormItemCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('section', { type: 'Int' })
    t.field('required', { type: 'Boolean' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.nonNull.field('type', { type: 'FormType' })
    t.nonNull.field('Form', { type: 'FormCreateNestedOneWithoutItemsInput' })
  },
})

export const FormItemUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('section', { type: 'Int' })
    t.nonNull.field('formId', { type: 'String' })
    t.field('required', { type: 'Boolean' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.nonNull.field('type', { type: 'FormType' })
  },
})

export const FormItemUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('section', { type: 'IntFieldUpdateOperationsInput' })
    t.field('required', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.field('type', { type: 'EnumFormTypeFieldUpdateOperationsInput' })
    t.field('Form', { type: 'FormUpdateOneRequiredWithoutItemsNestedInput' })
  },
})

export const FormItemUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('section', { type: 'IntFieldUpdateOperationsInput' })
    t.field('formId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('required', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.field('type', { type: 'EnumFormTypeFieldUpdateOperationsInput' })
  },
})

export const FormItemCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('section', { type: 'Int' })
    t.nonNull.field('formId', { type: 'String' })
    t.field('required', { type: 'Boolean' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.nonNull.field('type', { type: 'FormType' })
  },
})

export const FormItemUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('section', { type: 'IntFieldUpdateOperationsInput' })
    t.field('required', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.field('type', { type: 'EnumFormTypeFieldUpdateOperationsInput' })
  },
})

export const FormItemUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('section', { type: 'IntFieldUpdateOperationsInput' })
    t.field('formId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('required', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.field('type', { type: 'EnumFormTypeFieldUpdateOperationsInput' })
  },
})

export const FolderCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('Forms', { type: 'FormCreateNestedManyWithoutFolderInput' })
  },
})

export const FolderUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('Forms', {
      type: 'FormUncheckedCreateNestedManyWithoutFolderInput',
    })
  },
})

export const FolderUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('Forms', { type: 'FormUpdateManyWithoutFolderNestedInput' })
  },
})

export const FolderUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('Forms', {
      type: 'FormUncheckedUpdateManyWithoutFolderNestedInput',
    })
  },
})

export const FolderCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
  },
})

export const FolderUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const FolderUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const StringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const IntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const JsonNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'JsonNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_contains', { type: 'Json' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
  },
})

export const BoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
  },
})

export const StringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const DateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const FormItemListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemListRelationFilter',
  definition(t) {
    t.field('every', { type: 'FormItemWhereInput' })
    t.field('some', { type: 'FormItemWhereInput' })
    t.field('none', { type: 'FormItemWhereInput' })
  },
})

export const FolderNullableRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderNullableRelationFilter',
  definition(t) {
    t.field('is', { type: 'FolderWhereInput' })
    t.field('isNot', { type: 'FolderWhereInput' })
  },
})

export const SortOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SortOrderInput',
  definition(t) {
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.field('nulls', { type: 'NullsOrder' })
  },
})

export const FormItemOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const FormOwnerIdNameCompoundUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormOwnerIdNameCompoundUniqueInput',
  definition(t) {
    t.nonNull.field('ownerId', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
  },
})

export const FormCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('style', { type: 'SortOrder' })
    t.field('favorite', { type: 'SortOrder' })
    t.field('folderId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const FormAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormAvgOrderByAggregateInput',
  definition(t) {
    t.field('order', { type: 'SortOrder' })
  },
})

export const FormMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('favorite', { type: 'SortOrder' })
    t.field('folderId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const FormMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('favorite', { type: 'SortOrder' })
    t.field('folderId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const FormSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormSumOrderByAggregateInput',
  definition(t) {
    t.field('order', { type: 'SortOrder' })
  },
})

export const StringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const IntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const JsonNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'JsonNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_contains', { type: 'Json' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedJsonNullableFilter' })
    t.field('_max', { type: 'NestedJsonNullableFilter' })
  },
})

export const BoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
  },
})

export const StringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const DateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const EnumFormTypeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumFormTypeFilter',
  definition(t) {
    t.field('equals', { type: 'FormType' })
    t.list.field('in', { type: 'FormType' })
    t.list.field('notIn', { type: 'FormType' })
    t.field('not', { type: 'NestedEnumFormTypeFilter' })
  },
})

export const FormRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormRelationFilter',
  definition(t) {
    t.field('is', { type: 'FormWhereInput' })
    t.field('isNot', { type: 'FormWhereInput' })
  },
})

export const FormItemCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('section', { type: 'SortOrder' })
    t.field('formId', { type: 'SortOrder' })
    t.field('required', { type: 'SortOrder' })
    t.field('items', { type: 'SortOrder' })
    t.field('image', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
  },
})

export const FormItemAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemAvgOrderByAggregateInput',
  definition(t) {
    t.field('order', { type: 'SortOrder' })
    t.field('section', { type: 'SortOrder' })
  },
})

export const FormItemMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('section', { type: 'SortOrder' })
    t.field('formId', { type: 'SortOrder' })
    t.field('required', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
  },
})

export const FormItemMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('section', { type: 'SortOrder' })
    t.field('formId', { type: 'SortOrder' })
    t.field('required', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
  },
})

export const FormItemSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemSumOrderByAggregateInput',
  definition(t) {
    t.field('order', { type: 'SortOrder' })
    t.field('section', { type: 'SortOrder' })
  },
})

export const EnumFormTypeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumFormTypeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'FormType' })
    t.list.field('in', { type: 'FormType' })
    t.list.field('notIn', { type: 'FormType' })
    t.field('not', { type: 'NestedEnumFormTypeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumFormTypeFilter' })
    t.field('_max', { type: 'NestedEnumFormTypeFilter' })
  },
})

export const FormListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormListRelationFilter',
  definition(t) {
    t.field('every', { type: 'FormWhereInput' })
    t.field('some', { type: 'FormWhereInput' })
    t.field('none', { type: 'FormWhereInput' })
  },
})

export const FormOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const FolderOwnerIdNameCompoundUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderOwnerIdNameCompoundUniqueInput',
  definition(t) {
    t.nonNull.field('ownerId', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
  },
})

export const FolderCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
  },
})

export const FolderMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
  },
})

export const FolderMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
  },
})

export const FormItemCreateNestedManyWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCreateNestedManyWithoutFormInput',
  definition(t) {
    t.list.field('create', { type: 'FormItemCreateWithoutFormInput' })
    t.list.field('connectOrCreate', {
      type: 'FormItemCreateOrConnectWithoutFormInput',
    })
    t.field('createMany', { type: 'FormItemCreateManyFormInputEnvelope' })
    t.list.field('connect', { type: 'FormItemWhereUniqueInput' })
  },
})

export const FolderCreateNestedOneWithoutFormsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderCreateNestedOneWithoutFormsInput',
  definition(t) {
    t.field('create', { type: 'FolderCreateWithoutFormsInput' })
    t.field('connectOrCreate', {
      type: 'FolderCreateOrConnectWithoutFormsInput',
    })
    t.field('connect', { type: 'FolderWhereUniqueInput' })
  },
})

export const FormItemUncheckedCreateNestedManyWithoutFormInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'FormItemUncheckedCreateNestedManyWithoutFormInput',
    definition(t) {
      t.list.field('create', { type: 'FormItemCreateWithoutFormInput' })
      t.list.field('connectOrCreate', {
        type: 'FormItemCreateOrConnectWithoutFormInput',
      })
      t.field('createMany', { type: 'FormItemCreateManyFormInputEnvelope' })
      t.list.field('connect', { type: 'FormItemWhereUniqueInput' })
    },
  })

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const IntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const BoolFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Boolean' })
  },
})

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
  },
})

export const FormItemUpdateManyWithoutFormNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUpdateManyWithoutFormNestedInput',
  definition(t) {
    t.list.field('create', { type: 'FormItemCreateWithoutFormInput' })
    t.list.field('connectOrCreate', {
      type: 'FormItemCreateOrConnectWithoutFormInput',
    })
    t.list.field('upsert', {
      type: 'FormItemUpsertWithWhereUniqueWithoutFormInput',
    })
    t.field('createMany', { type: 'FormItemCreateManyFormInputEnvelope' })
    t.list.field('set', { type: 'FormItemWhereUniqueInput' })
    t.list.field('disconnect', { type: 'FormItemWhereUniqueInput' })
    t.list.field('delete', { type: 'FormItemWhereUniqueInput' })
    t.list.field('connect', { type: 'FormItemWhereUniqueInput' })
    t.list.field('update', {
      type: 'FormItemUpdateWithWhereUniqueWithoutFormInput',
    })
    t.list.field('updateMany', {
      type: 'FormItemUpdateManyWithWhereWithoutFormInput',
    })
    t.list.field('deleteMany', { type: 'FormItemScalarWhereInput' })
  },
})

export const FolderUpdateOneWithoutFormsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderUpdateOneWithoutFormsNestedInput',
  definition(t) {
    t.field('create', { type: 'FolderCreateWithoutFormsInput' })
    t.field('connectOrCreate', {
      type: 'FolderCreateOrConnectWithoutFormsInput',
    })
    t.field('upsert', { type: 'FolderUpsertWithoutFormsInput' })
    t.field('disconnect', { type: 'FolderWhereInput' })
    t.field('delete', { type: 'FolderWhereInput' })
    t.field('connect', { type: 'FolderWhereUniqueInput' })
    t.field('update', { type: 'FolderUpdateToOneWithWhereWithoutFormsInput' })
  },
})

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const FormItemUncheckedUpdateManyWithoutFormNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'FormItemUncheckedUpdateManyWithoutFormNestedInput',
    definition(t) {
      t.list.field('create', { type: 'FormItemCreateWithoutFormInput' })
      t.list.field('connectOrCreate', {
        type: 'FormItemCreateOrConnectWithoutFormInput',
      })
      t.list.field('upsert', {
        type: 'FormItemUpsertWithWhereUniqueWithoutFormInput',
      })
      t.field('createMany', { type: 'FormItemCreateManyFormInputEnvelope' })
      t.list.field('set', { type: 'FormItemWhereUniqueInput' })
      t.list.field('disconnect', { type: 'FormItemWhereUniqueInput' })
      t.list.field('delete', { type: 'FormItemWhereUniqueInput' })
      t.list.field('connect', { type: 'FormItemWhereUniqueInput' })
      t.list.field('update', {
        type: 'FormItemUpdateWithWhereUniqueWithoutFormInput',
      })
      t.list.field('updateMany', {
        type: 'FormItemUpdateManyWithWhereWithoutFormInput',
      })
      t.list.field('deleteMany', { type: 'FormItemScalarWhereInput' })
    },
  })

export const FormCreateNestedOneWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateNestedOneWithoutItemsInput',
  definition(t) {
    t.field('create', { type: 'FormCreateWithoutItemsInput' })
    t.field('connectOrCreate', { type: 'FormCreateOrConnectWithoutItemsInput' })
    t.field('connect', { type: 'FormWhereUniqueInput' })
  },
})

export const EnumFormTypeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumFormTypeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'FormType' })
  },
})

export const FormUpdateOneRequiredWithoutItemsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpdateOneRequiredWithoutItemsNestedInput',
  definition(t) {
    t.field('create', { type: 'FormCreateWithoutItemsInput' })
    t.field('connectOrCreate', { type: 'FormCreateOrConnectWithoutItemsInput' })
    t.field('upsert', { type: 'FormUpsertWithoutItemsInput' })
    t.field('connect', { type: 'FormWhereUniqueInput' })
    t.field('update', { type: 'FormUpdateToOneWithWhereWithoutItemsInput' })
  },
})

export const FormCreateNestedManyWithoutFolderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateNestedManyWithoutFolderInput',
  definition(t) {
    t.list.field('create', { type: 'FormCreateWithoutFolderInput' })
    t.list.field('connectOrCreate', {
      type: 'FormCreateOrConnectWithoutFolderInput',
    })
    t.field('createMany', { type: 'FormCreateManyFolderInputEnvelope' })
    t.list.field('connect', { type: 'FormWhereUniqueInput' })
  },
})

export const FormUncheckedCreateNestedManyWithoutFolderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedCreateNestedManyWithoutFolderInput',
  definition(t) {
    t.list.field('create', { type: 'FormCreateWithoutFolderInput' })
    t.list.field('connectOrCreate', {
      type: 'FormCreateOrConnectWithoutFolderInput',
    })
    t.field('createMany', { type: 'FormCreateManyFolderInputEnvelope' })
    t.list.field('connect', { type: 'FormWhereUniqueInput' })
  },
})

export const FormUpdateManyWithoutFolderNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpdateManyWithoutFolderNestedInput',
  definition(t) {
    t.list.field('create', { type: 'FormCreateWithoutFolderInput' })
    t.list.field('connectOrCreate', {
      type: 'FormCreateOrConnectWithoutFolderInput',
    })
    t.list.field('upsert', {
      type: 'FormUpsertWithWhereUniqueWithoutFolderInput',
    })
    t.field('createMany', { type: 'FormCreateManyFolderInputEnvelope' })
    t.list.field('set', { type: 'FormWhereUniqueInput' })
    t.list.field('disconnect', { type: 'FormWhereUniqueInput' })
    t.list.field('delete', { type: 'FormWhereUniqueInput' })
    t.list.field('connect', { type: 'FormWhereUniqueInput' })
    t.list.field('update', {
      type: 'FormUpdateWithWhereUniqueWithoutFolderInput',
    })
    t.list.field('updateMany', {
      type: 'FormUpdateManyWithWhereWithoutFolderInput',
    })
    t.list.field('deleteMany', { type: 'FormScalarWhereInput' })
  },
})

export const FormUncheckedUpdateManyWithoutFolderNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedUpdateManyWithoutFolderNestedInput',
  definition(t) {
    t.list.field('create', { type: 'FormCreateWithoutFolderInput' })
    t.list.field('connectOrCreate', {
      type: 'FormCreateOrConnectWithoutFolderInput',
    })
    t.list.field('upsert', {
      type: 'FormUpsertWithWhereUniqueWithoutFolderInput',
    })
    t.field('createMany', { type: 'FormCreateManyFolderInputEnvelope' })
    t.list.field('set', { type: 'FormWhereUniqueInput' })
    t.list.field('disconnect', { type: 'FormWhereUniqueInput' })
    t.list.field('delete', { type: 'FormWhereUniqueInput' })
    t.list.field('connect', { type: 'FormWhereUniqueInput' })
    t.list.field('update', {
      type: 'FormUpdateWithWhereUniqueWithoutFolderInput',
    })
    t.list.field('updateMany', {
      type: 'FormUpdateManyWithWhereWithoutFolderInput',
    })
    t.list.field('deleteMany', { type: 'FormScalarWhereInput' })
  },
})

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const NestedBoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
  },
})

export const NestedStringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedDateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedStringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const NestedIntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const NestedFloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatFilter' })
  },
})

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const NestedJsonNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedJsonNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_contains', { type: 'Json' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
  },
})

export const NestedBoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
  },
})

export const NestedStringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedDateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedEnumFormTypeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumFormTypeFilter',
  definition(t) {
    t.field('equals', { type: 'FormType' })
    t.list.field('in', { type: 'FormType' })
    t.list.field('notIn', { type: 'FormType' })
    t.field('not', { type: 'NestedEnumFormTypeFilter' })
  },
})

export const NestedEnumFormTypeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumFormTypeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'FormType' })
    t.list.field('in', { type: 'FormType' })
    t.list.field('notIn', { type: 'FormType' })
    t.field('not', { type: 'NestedEnumFormTypeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumFormTypeFilter' })
    t.field('_max', { type: 'NestedEnumFormTypeFilter' })
  },
})

export const FormItemCreateWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCreateWithoutFormInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('section', { type: 'Int' })
    t.field('required', { type: 'Boolean' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.nonNull.field('type', { type: 'FormType' })
  },
})

export const FormItemUncheckedCreateWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUncheckedCreateWithoutFormInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('section', { type: 'Int' })
    t.field('required', { type: 'Boolean' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.nonNull.field('type', { type: 'FormType' })
  },
})

export const FormItemCreateOrConnectWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCreateOrConnectWithoutFormInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FormItemWhereUniqueInput' })
    t.nonNull.field('create', { type: 'FormItemCreateWithoutFormInput' })
  },
})

export const FormItemCreateManyFormInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCreateManyFormInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'FormItemCreateManyFormInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const FolderCreateWithoutFormsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderCreateWithoutFormsInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
  },
})

export const FolderUncheckedCreateWithoutFormsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderUncheckedCreateWithoutFormsInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
  },
})

export const FolderCreateOrConnectWithoutFormsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderCreateOrConnectWithoutFormsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FolderWhereUniqueInput' })
    t.nonNull.field('create', { type: 'FolderCreateWithoutFormsInput' })
  },
})

export const FormItemUpsertWithWhereUniqueWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUpsertWithWhereUniqueWithoutFormInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FormItemWhereUniqueInput' })
    t.nonNull.field('update', { type: 'FormItemUpdateWithoutFormInput' })
    t.nonNull.field('create', { type: 'FormItemCreateWithoutFormInput' })
  },
})

export const FormItemUpdateWithWhereUniqueWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUpdateWithWhereUniqueWithoutFormInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FormItemWhereUniqueInput' })
    t.nonNull.field('data', { type: 'FormItemUpdateWithoutFormInput' })
  },
})

export const FormItemUpdateManyWithWhereWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUpdateManyWithWhereWithoutFormInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FormItemScalarWhereInput' })
    t.nonNull.field('data', { type: 'FormItemUpdateManyMutationInput' })
  },
})

export const FormItemScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'FormItemScalarWhereInput' })
    t.list.field('OR', { type: 'FormItemScalarWhereInput' })
    t.list.field('NOT', { type: 'FormItemScalarWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('order', { type: 'IntFilter' })
    t.field('section', { type: 'IntFilter' })
    t.field('formId', { type: 'StringFilter' })
    t.field('required', { type: 'BoolFilter' })
    t.field('items', { type: 'JsonNullableFilter' })
    t.field('image', { type: 'JsonNullableFilter' })
    t.field('type', { type: 'EnumFormTypeFilter' })
  },
})

export const FolderUpsertWithoutFormsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderUpsertWithoutFormsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'FolderUpdateWithoutFormsInput' })
    t.nonNull.field('create', { type: 'FolderCreateWithoutFormsInput' })
    t.field('where', { type: 'FolderWhereInput' })
  },
})

export const FolderUpdateToOneWithWhereWithoutFormsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderUpdateToOneWithWhereWithoutFormsInput',
  definition(t) {
    t.field('where', { type: 'FolderWhereInput' })
    t.nonNull.field('data', { type: 'FolderUpdateWithoutFormsInput' })
  },
})

export const FolderUpdateWithoutFormsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderUpdateWithoutFormsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const FolderUncheckedUpdateWithoutFormsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FolderUncheckedUpdateWithoutFormsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const FormCreateWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateWithoutItemsInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('Folder', { type: 'FolderCreateNestedOneWithoutFormsInput' })
  },
})

export const FormUncheckedCreateWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedCreateWithoutItemsInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'Boolean' })
    t.field('folderId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const FormCreateOrConnectWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateOrConnectWithoutItemsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FormWhereUniqueInput' })
    t.nonNull.field('create', { type: 'FormCreateWithoutItemsInput' })
  },
})

export const FormUpsertWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpsertWithoutItemsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'FormUpdateWithoutItemsInput' })
    t.nonNull.field('create', { type: 'FormCreateWithoutItemsInput' })
    t.field('where', { type: 'FormWhereInput' })
  },
})

export const FormUpdateToOneWithWhereWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpdateToOneWithWhereWithoutItemsInput',
  definition(t) {
    t.field('where', { type: 'FormWhereInput' })
    t.nonNull.field('data', { type: 'FormUpdateWithoutItemsInput' })
  },
})

export const FormUpdateWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpdateWithoutItemsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('Folder', { type: 'FolderUpdateOneWithoutFormsNestedInput' })
  },
})

export const FormUncheckedUpdateWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedUpdateWithoutItemsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('folderId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const FormCreateWithoutFolderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateWithoutFolderInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('items', { type: 'FormItemCreateNestedManyWithoutFormInput' })
  },
})

export const FormUncheckedCreateWithoutFolderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedCreateWithoutFolderInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('items', {
      type: 'FormItemUncheckedCreateNestedManyWithoutFormInput',
    })
  },
})

export const FormCreateOrConnectWithoutFolderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateOrConnectWithoutFolderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FormWhereUniqueInput' })
    t.nonNull.field('create', { type: 'FormCreateWithoutFolderInput' })
  },
})

export const FormCreateManyFolderInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateManyFolderInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'FormCreateManyFolderInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const FormUpsertWithWhereUniqueWithoutFolderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpsertWithWhereUniqueWithoutFolderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FormWhereUniqueInput' })
    t.nonNull.field('update', { type: 'FormUpdateWithoutFolderInput' })
    t.nonNull.field('create', { type: 'FormCreateWithoutFolderInput' })
  },
})

export const FormUpdateWithWhereUniqueWithoutFolderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpdateWithWhereUniqueWithoutFolderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FormWhereUniqueInput' })
    t.nonNull.field('data', { type: 'FormUpdateWithoutFolderInput' })
  },
})

export const FormUpdateManyWithWhereWithoutFolderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpdateManyWithWhereWithoutFolderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FormScalarWhereInput' })
    t.nonNull.field('data', { type: 'FormUpdateManyMutationInput' })
  },
})

export const FormScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'FormScalarWhereInput' })
    t.list.field('OR', { type: 'FormScalarWhereInput' })
    t.list.field('NOT', { type: 'FormScalarWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('ownerId', { type: 'StringFilter' })
    t.field('order', { type: 'IntFilter' })
    t.field('style', { type: 'JsonNullableFilter' })
    t.field('favorite', { type: 'BoolFilter' })
    t.field('folderId', { type: 'StringNullableFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
  },
})

export const FormItemCreateManyFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCreateManyFormInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('section', { type: 'Int' })
    t.field('required', { type: 'Boolean' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.nonNull.field('type', { type: 'FormType' })
  },
})

export const FormItemUpdateWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUpdateWithoutFormInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('section', { type: 'IntFieldUpdateOperationsInput' })
    t.field('required', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.field('type', { type: 'EnumFormTypeFieldUpdateOperationsInput' })
  },
})

export const FormItemUncheckedUpdateWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUncheckedUpdateWithoutFormInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('section', { type: 'IntFieldUpdateOperationsInput' })
    t.field('required', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.field('type', { type: 'EnumFormTypeFieldUpdateOperationsInput' })
  },
})

export const FormItemUncheckedUpdateManyWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUncheckedUpdateManyWithoutFormInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('section', { type: 'IntFieldUpdateOperationsInput' })
    t.field('required', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.field('type', { type: 'EnumFormTypeFieldUpdateOperationsInput' })
  },
})

export const FormCreateManyFolderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateManyFolderInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const FormUpdateWithoutFolderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpdateWithoutFolderInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('items', { type: 'FormItemUpdateManyWithoutFormNestedInput' })
  },
})

export const FormUncheckedUpdateWithoutFolderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedUpdateWithoutFolderInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('items', {
      type: 'FormItemUncheckedUpdateManyWithoutFormNestedInput',
    })
  },
})

export const FormUncheckedUpdateManyWithoutFolderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedUpdateManyWithoutFolderInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
    t.field('favorite', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const AggregateForm = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateForm',
  definition(t) {
    t.nullable.field('_count', { type: 'FormCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'FormAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'FormSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'FormMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'FormMaxAggregateOutputType' })
  },
})

export const AggregateFormItem = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateFormItem',
  definition(t) {
    t.nullable.field('_count', { type: 'FormItemCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'FormItemAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'FormItemSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'FormItemMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'FormItemMaxAggregateOutputType' })
  },
})

export const AggregateFolder = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateFolder',
  definition(t) {
    t.nullable.field('_count', { type: 'FolderCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'FolderMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'FolderMaxAggregateOutputType' })
  },
})

export const FormCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormCountOutputType',
  definition(t) {
    t.field('items', { type: 'Int' })
  },
})

export const FormCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('ownerId', { type: 'Int' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Int' })
    t.field('favorite', { type: 'Int' })
    t.field('folderId', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const FormAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('order', { type: 'Float' })
  },
})

export const FormSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormSumAggregateOutputType',
  definition(t) {
    t.nullable.field('order', { type: 'Int' })
  },
})

export const FormMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('ownerId', { type: 'String' })
    t.nullable.field('order', { type: 'Int' })
    t.nullable.field('favorite', { type: 'Boolean' })
    t.nullable.field('folderId', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const FormMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('ownerId', { type: 'String' })
    t.nullable.field('order', { type: 'Int' })
    t.nullable.field('favorite', { type: 'Boolean' })
    t.nullable.field('folderId', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const FormItemCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormItemCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('order', { type: 'Int' })
    t.field('section', { type: 'Int' })
    t.field('formId', { type: 'Int' })
    t.field('required', { type: 'Int' })
    t.field('items', { type: 'Int' })
    t.field('image', { type: 'Int' })
    t.field('type', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const FormItemAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormItemAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('order', { type: 'Float' })
    t.nullable.field('section', { type: 'Float' })
  },
})

export const FormItemSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormItemSumAggregateOutputType',
  definition(t) {
    t.nullable.field('order', { type: 'Int' })
    t.nullable.field('section', { type: 'Int' })
  },
})

export const FormItemMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormItemMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('order', { type: 'Int' })
    t.nullable.field('section', { type: 'Int' })
    t.nullable.field('formId', { type: 'String' })
    t.nullable.field('required', { type: 'Boolean' })
    t.nullable.field('type', { type: 'FormType' })
  },
})

export const FormItemMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormItemMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('order', { type: 'Int' })
    t.nullable.field('section', { type: 'Int' })
    t.nullable.field('formId', { type: 'String' })
    t.nullable.field('required', { type: 'Boolean' })
    t.nullable.field('type', { type: 'FormType' })
  },
})

export const FolderCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FolderCountOutputType',
  definition(t) {
    t.field('Forms', { type: 'Int' })
  },
})

export const FolderCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FolderCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('ownerId', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const FolderMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FolderMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('ownerId', { type: 'String' })
  },
})

export const FolderMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FolderMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('ownerId', { type: 'String' })
  },
})
