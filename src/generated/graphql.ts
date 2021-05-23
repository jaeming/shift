import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Album = {
  __typename?: 'Album';
  artist: Artist;
  artwork?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  songs: Array<Song>;
  year?: Maybe<Scalars['Int']>;
};

export type Artist = {
  __typename?: 'Artist';
  albums: Array<Album>;
  id: Scalars['ID'];
  name: Scalars['String'];
  songs: Array<Song>;
};

/** Autogenerated input type of Create */
export type CreateInput = {
  attributes: SongAttributes;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of Create */
export type CreatePayload = {
  __typename?: 'CreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<Song>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a Song */
  songCreate?: Maybe<CreatePayload>;
};


export type MutationSongCreateArgs = {
  input: CreateInput;
};

export type Post = {
  __typename?: 'Post';
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Album */
  album: Album;
  /** All Albums */
  albums: Array<Album>;
  /** Artists */
  artist: Artist;
  /** All Artists */
  artists: Array<Artist>;
  /** All Posts */
  posts: Array<Post>;
  /** Song */
  song?: Maybe<Song>;
  /** All Songs */
  songs: Array<Song>;
};


export type QueryAlbumArgs = {
  id: Scalars['Int'];
};


export type QueryArtistArgs = {
  id: Scalars['Int'];
};


export type QueryPostsArgs = {
  letMeIn: Scalars['Boolean'];
};


export type QuerySongArgs = {
  id: Scalars['Int'];
};


export type QuerySongsArgs = {
  sort?: Maybe<SortOption>;
  search?: Maybe<Scalars['String']>;
};

export type Song = {
  __typename?: 'Song';
  album?: Maybe<Album>;
  albumTrack?: Maybe<Scalars['Int']>;
  artist?: Maybe<Artist>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  formattedDuration?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lyrics?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  year?: Maybe<Scalars['Int']>;
};

export type SongAttributes = {
  title: Scalars['String'];
  lyrics?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  artist?: Maybe<Scalars['String']>;
  album?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  formattedDuration?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
};

export enum SongSortFields {
  Artist = 'ARTIST',
  Title = 'TITLE',
  Duration = 'DURATION',
  Album = 'ALBUM',
  Published = 'PUBLISHED'
}

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SortOption = {
  field: SongSortFields;
  direction: Sort;
};

export type SongsQueryVariables = Exact<{ [key: string]: never; }>;


export type SongsQuery = (
  { __typename?: 'Query' }
  & { songs: Array<(
    { __typename?: 'Song' }
    & Pick<Song, 'id' | 'title' | 'duration'>
    & { artist?: Maybe<(
      { __typename?: 'Artist' }
      & Pick<Artist, 'name'>
    )>, album?: Maybe<(
      { __typename?: 'Album' }
      & Pick<Album, 'name'>
    )> }
  )> }
);


export const SongsDocument = gql`
    query Songs {
  songs {
    id
    artist {
      name
    }
    title
    duration
    album {
      name
    }
  }
}
    `;

export function useSongsQuery(options: Omit<Urql.UseQueryArgs<SongsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SongsQuery>({ query: SongsDocument, ...options });
};