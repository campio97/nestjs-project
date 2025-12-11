import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostType } from '../enums/postType.enum';
import { Status } from '../enums/status.enum';
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto';

export class CreatePostDto {
  @ApiProperty({
    example: 'My super cool title',
  })
  @IsString()
  @MaxLength(512)
  @MinLength(3)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    name: 'postType',
    type: String,
    enum: PostType,
    example: 'post',
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  @ApiProperty({
    name: 'slug',
    type: String,
    example: 'my-supercool-slug',
  })
  @IsString()
  @MaxLength(256)
  @MinLength(3)
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  slug: string;

  @ApiProperty({
    enum: Status,
    example: 'draft',
  })
  @IsEnum(Status)
  status: Status;

  @ApiPropertyOptional({
    required: false,
    type: String,
    name: 'content',
    example: 'My super cool article content',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    title: 'schema',
    type: String,
    example: '{"@context":"https://schema.org","@type":"Person"}',
    required: false,
  })
  @IsString()
  @IsJSON()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional({
    title: 'featuredImageUrl',
    type: String,
    example: 'https://images.com/my-image.png',
    required: false,
  })
  @IsString()
  @IsUrl()
  @IsOptional()
  @MaxLength(1024)
  featuredImageUrl?: string;

  @ApiProperty({
    title: 'publishOn',
    type: Date,
    required: false,
  })
  @IsISO8601()
  publishOn: Date;

  @ApiPropertyOptional({
    title: 'tags',
    type: Array,
    example: ['tag1', 'tag2'],
  })
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  @IsNotEmpty({ each: true })
  @IsOptional()
  tags: string[];

  @ApiProperty({
    title: 'metaOptions',
    type: Array<CreatePostMetaOptionsDto>,
    example: [{ key: 'key1', value: 'value1' }],
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description: 'The key can be any string identifier',
          example: 'sidebarEnabled',
        },
        value: {
          type: 'any',
          example: true,
        },
      },
    },
    required: false,
  })
  @IsArray()
  @Type(() => CreatePostMetaOptionsDto)
  @ValidateNested({ each: true })
  @IsOptional()
  metaOptions?: CreatePostMetaOptionsDto[];
}
