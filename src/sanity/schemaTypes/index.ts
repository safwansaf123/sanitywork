import { type SchemaTypeDefinition } from 'sanity'
import {products} from '@/sanity/schema/product'
import { aircrafts } from '../schema/Aircraft'
import { students } from '../schema/student'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, aircrafts, students]
}
